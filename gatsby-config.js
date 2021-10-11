module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "strytegy",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve:"gatsby-source-graphql",
      options:{
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/cku8rtyk243fm01yzgt7mezpc/master"
      },
    }
],
};
