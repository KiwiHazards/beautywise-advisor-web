
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beauty-warm p-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Beauty Advisor Demo</h1>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Try Our AI Analysis</h2>
              <p className="text-gray-600 mb-4">
                Experience how our AI analyzes your skin concerns and provides personalized recommendations.
              </p>
              
              {/* Demo Interface */}
              <div className="space-y-4">
                <div className="border-2 border-dashed border-beauty-pink rounded-lg p-8 text-center">
                  <p className="text-gray-500">Upload a photo or use your camera to get started</p>
                  <button className="mt-4 px-6 py-2 bg-beauty-pink text-white rounded-full hover:shadow-lg transition">
                    Upload Photo
                  </button>
                </div>
                
                <div className="bg-beauty-rose bg-opacity-20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Note: This is a demo version. For full analysis and personalized recommendations, 
                    please create an account.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/account')}
              className="w-full px-6 py-3 bg-beauty-pink text-white rounded-full font-medium hover:shadow-lg transition"
            >
              Create Account for Full Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
