const common = {
  axiosURL:
    process.env.NODE_ENV === "development"
      ? `http://${window.location.hostname}:5000`
      : `https://${window.location.hostname}`,
};

export default common;
