import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';
import { useEffect, useState } from "react";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`https://ecommerce-backend-theta-pink.vercel.app/api/products/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-white p-6 bg-[#1e293b] min-h-screen">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="p-6 text-white bg-[#1e293b] min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e293b] text-white p-6">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 flex items-center justify-center">
          <div className="w-80">
            <Zoom>
              <img
                alt={product.title}
                src={product.image}
                width={320}
                height={320}
                className="rounded-lg"
              />
            </Zoom>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 p-8 space-y-4">
          <h2 className="text-3xl font-bold text-cyan-600">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Color:</span> {product.colour}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-cyan-600 text-lg font-bold">{product.price}</span>
            </p>
          </div>

          {product.size && product.size.length > 0 && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Available Sizes:</label>
              <div className="flex flex-wrap gap-2">
                {product.size.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Ratings */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`w-5 h-5 ${i < product.rate ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
