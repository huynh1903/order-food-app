import Banner from "../components/UI/Banner";
import Button from "../components/UI/Button";
import title from "../utils/title";

const FeedbackPage = () => {
  title("Feedback");
  return (
    <>
      <Banner name="Feedback" />
      <section className="flex justify-center my-8">
        <div className="w-11/12 flex justify-center items-center flex-col">
          <div className="w-10/12 md:w-6/12 lg:w-4/12">
            <h2 className="text-center text-slate-800 text-xl font-semibold">
              We value your feedback
            </h2>
            <p className="text-center text-lg text-slate-700">
              Please complete the following form and help us improve our
              customer
            </p>
          </div>
          <form className="w-11/12 md:w-9/12 my-8 p-6 rounded bg-slate-200 shadow shadow-slate-100 flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                className="px-3 py-2 text-slate-800 focus-visible:outline-none md:w-6/12"
                type="text"
                placeholder="First Name"
              />
              <input
                className="px-3 py-2 text-slate-800 focus-visible:outline-none w-6/12"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                className="px-3 py-2 text-slate-800 focus-visible:outline-none md:w-6/12"
                type="email"
                placeholder="Email"
              />
              <input
                className="px-3 py-2 text-slate-800 focus-visible:outline-none md:w-6/12"
                type="text"
                placeholder="Phone"
              />
            </div>
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="text"
              placeholder="Address"
            />
            <textarea
              name="feedback"
              id=""
              placeholder="Your feedback"
              className="px-3 py-2 text-slate-800 outline-none"
              rows={4}
            ></textarea>
            <div className="flex justify-center">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FeedbackPage;
