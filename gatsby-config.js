module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `khoufstudio`,
    description: `Khoufstudio landng page`,
    author: `@khoufstudio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
	'gatsby-plugin-sass',
	{
		// location about yout blog posts
		resolve: `gatsby-source-filesystem`,
		options: {
			name: 'markdown-pages',
			path: `${__dirname}/src/markdown-pages`,
		}
	},
	`gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
