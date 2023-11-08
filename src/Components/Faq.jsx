import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div
      className="hero relative"
      style={{ backgroundImage: `url("https://i.ibb.co/z7fJkQq/2.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="flex flex-col md:flex-row container mx-auto items-center pt-20">
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 md:mb-0">
          <section className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold sm:text-4xl mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg">
                  <details className="border-b">
                    <summary className="py-4 px-6 cursor-pointer focus:outline-none">
                      1. How can I post a job on the website?
                    </summary>
                    <p className="py-4 px-6 dark:text-gray-400">
                      To post a job, log in to your account, navigate to the
                      dashboard, and click on the Post a Job button. Fill out
                      the job details, including title, description, budget, and
                      deadline. Once submitted, your job will be listed for
                      freelancers to apply.
                    </p>
                  </details>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg">
                  <details className="border-b">
                    <summary className="py-4 px-6 cursor-pointer focus:outline-none">
                      2. How do freelancers apply for jobs?
                    </summary>
                    <p className="py-4 px-6 dark:text-gray-400">
                      Freelancers can browse available jobs on the website and
                      apply to the ones that match their skills and interests.
                      They can click on the job listing, review the details, and
                      submit their proposals outlining their expertise,
                      experience, and why they are suitable for the job.
                    </p>
                  </details>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg">
                  <details className="border-b">
                    <summary className="py-4 px-6 cursor-pointer focus:outline-none">
                      3. Is it free to post jobs and apply as a freelancer?
                    </summary>
                    <p className="py-4 px-6 dark:text-gray-400">
                      Yes, posting jobs and applying as a freelancer is free on
                      our platform. There are no charges for basic job listings
                      or for freelancers to submit their proposals. However,
                      there might be premium features or services available at
                      an additional cost for enhanced visibility or priority
                      listings.
                    </p>
                  </details>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg">
                  <details className="border-b">
                    <summary className="py-4 px-6 cursor-pointer focus:outline-none">
                      4. How can I communicate with freelancers or clients?
                    </summary>
                    <p className="py-4 px-6 dark:text-gray-400">
                      Once a freelancer applies for a job or a client expresses
                      interest in a freelancer&apos;s proposal, they can
                      communicate through our messaging system. Users can
                      exchange messages, discuss project details, negotiate
                      terms, and clarify any questions before finalizing the
                      collaboration.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2">
          <img src={"https://i.ibb.co/wrDPRJG/man-2.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
