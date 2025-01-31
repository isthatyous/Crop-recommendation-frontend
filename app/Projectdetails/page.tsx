export default function PageDetails() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
              Crop Recommendation System Using Machine Learning
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              <p>Innovative Technology for Smarter Agriculture</p>
            </p>
  
            <div className="mt-10 max-w-3xl mx-auto text-left">
              <h2 className="text-xl font-semibold text-indigo-600">
                Description
              </h2>
              <p className="mt-2 text-gray-700">
                The <strong>Crop Recommendation System</strong> is a state-of-the-art, 
                machine learning-powered application crafted to redefine agricultural decision-making. 
                It provides actionable, data-driven crop suggestions based on diverse environmental and 
                soil conditions, enabling farmers and agricultural professionals to maximize yield and 
                profitability.
              </p>
              <p className="mt-2 text-gray-700">
                This intelligent system evaluates crucial factors such as soil type, climate, rainfall, 
                temperature, humidity, and pH levels, using predictive models and historical data to generate 
                precise, personalized recommendations for specific regions.
              </p>
  
              <h2 className="mt-6 text-xl font-semibold text-indigo-600">
                Key Features
              </h2>
              <ul className="mt-2 text-gray-700 list-disc pl-5">
                <li>
                  <strong>Data Collection:</strong> Enables users to input essential parameters, including soil 
                  properties, climatic conditions, and geographic location.
                </li>
                <li>
                  <strong>Data Preprocessing:</strong> Handles missing values, scales features, and processes 
                  categorical variables to ensure data readiness for analysis.
                </li>
                <li>
                  <strong>Machine Learning Models:</strong> Employs powerful algorithms like Decision Trees, 
                  Random Forests, Support Vector Machines (SVM), and Gradient Boosting to build accurate 
                  predictive models.
                </li>
                <li>
                  <strong>Model Training and Evaluation:</strong> Utilizes historical datasets to train models 
                  and evaluates them using metrics like accuracy, precision, and recall for reliability.
                </li>
                <li>
                  <strong>Tailored Recommendations:</strong> Suggests the most suitable crops for the provided 
                  conditions, ensuring a high degree of precision and practicality.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Features an intuitive design that allows users to 
                  input data effortlessly, view recommendations, and access detailed insights.
                </li>
              </ul>
  
              <h2 className="mt-6 text-xl font-semibold text-indigo-600">
                Technologies Used
              </h2>
              <ul className="mt-2 text-gray-700 list-disc pl-5">
                <li>
                  <strong>Python:</strong> Backbone of model development and data processing.
                </li>
                <li>
                  <strong>Scikit-learn:</strong> Enables training and evaluation of machine learning models.
                </li>
                <li>
                  <strong>Pandas & NumPy:</strong> Simplifies data manipulation and numerical computations.
                </li>
                <li>
                  <strong>Flask:</strong> Powers the web application, enabling seamless user interactions.
                </li>
                <li>
                  <strong>HTML/CSS & JavaScript:</strong> Enhances the interface with a responsive and interactive design.
                </li>
              </ul>
            </div>
  
            <div className="mt-10">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }
  