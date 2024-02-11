export const Features1 = () => {
  return (
    <section className="mb-8 mt-1">
      <div className="custom-block-big-title mb-16 content-center items-center px-8 text-center sm:px-24 md:px-48">
        Stats
      </div>
      <div className="flex content-center justify-center">
        <div className="stats shadow border-green-50 rounded-xl bg-customDarkBg3">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Servers</div>
            <div className="stat-value text-primary">11.7K</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-secondary">4.5M+</div>
          </div>

          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-title">Happy customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
