window.onload = () => {
  async function getProducts() {
    const response = await fetch("https://bendevoficial.com/api/mentoria/produtos").then(res => {
      return res.json();
    });
    console.log(response);
  }

  getProducts();
}