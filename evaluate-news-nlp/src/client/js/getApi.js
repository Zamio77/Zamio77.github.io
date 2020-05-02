export const getApi = async () => {
    const request = await fetch("http://localhost:8080/api");
    try {
      const allData = await request.json();
      console.log(allData);
    } catch (error) {
      console.log("error", error);
    }
  };

export { handleSubmit }