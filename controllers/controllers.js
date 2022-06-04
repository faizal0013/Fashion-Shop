exports.getHome = (req, res) => {
  res.render('index', {
    pageTitle: 'Fashion Shop',
    trandingWeekBox1: [
      'images/tranding_1.jpg',
      'images/tranding_2.jpg',
      'images/tranding_3.jpg',
      'images/tranding_4.jpg',
    ],
    trandingWeekBox2: [
      'images/tranding_4.jpg',
      'images/tranding_3.jpg',
      'images/tranding_2.jpg',
      'images/tranding_1.jpg',
    ],
    latestNews: ['images/latest-news-1.jpg', 'images/latest-news-2.jpg', 'images/latest-news-3.jpg'],
  });
};
