import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Scene3D } from './components/Scene3D';
import { Suspense } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-8">
                  <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">
                      Futuristic Dental Prosthesis
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Explore and customize your personalized dental prosthesis with our advanced 3D technology
                    </p>
                  </section>

                  <section className="bg-white rounded-xl shadow-xl p-6">
                    <Suspense fallback={<LoadingSpinner />}>
                      <Scene3D />
                    </Suspense>
                  </section>

                  <section className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">
                        Precision Engineering
                      </h3>
                      <p className="text-gray-600">
                        Our advanced 3D printing technology ensures precise and durable dental prostheses
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">
                        Secure Customization
                      </h3>
                      <p className="text-gray-600">
                        Secure and private customization process for your personalized dental prosthesis
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">
                        Expert Consultation
                      </h3>
                      <p className="text-gray-600">
                        Access to expert dental professionals for personalized consultation and support
                      </p>
                    </div>
                  </section>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
