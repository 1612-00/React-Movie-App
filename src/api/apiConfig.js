const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f93560d172314d4d8827591d4105e552",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`, 
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`, 
}

export default apiConfig;