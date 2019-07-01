const musicians = [
    {
        name: 'Marilyn Manson', //Singer
        image: 'http://www.providermodule.com/news/uploads/hud-perou3-th.jpg',
        scores: [4, 5, 1, 2, 4, 3, 4, 4, 1, 3, 2, 1, 1, 1, 3, 3, 4, 1, 3, 2]
    }, {
        name: 'Gene Simmons', //Kiss
        image: 'https://www.gannett-cdn.com/-mm-/ef5b6ae4a5f1dda929869a48e2e9e4269eeb6758/c=551-0-5761-3917/local/-/media/2018/07/09/USATODAY/USATODAY/636667309176728434-EPA-SPAIN-MUSIC-101317555.JPG?width=540&height=405&fit=crop',
        scores: [2, 5, 3, 1, 2, 5, 1, 3, 3, 4, 3, 5, 4, 2, 2, 2, 3, 3, 2, 3]
    }, {
        name: 'Davey Havok', //AFI
        image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/05/GettyImages-679451854_afi_davey_havok_1000.jpg',
        scores: [4, 2, 4, 4, 4, 1, 1, 5, 5, 3, 5, 3, 3, 2, 4, 3, 3, 1, 1, 3]
    }, {
        name: 'Maria Brink', //In This Moment
        image: 'https://i.pinimg.com/originals/38/be/57/38be578c38b0a9f79fb20cb665b0e799.jpg',
        scores: [5, 4, 1, 5, 2, 3, 2, 5, 2, 1, 1, 3, 2, 5, 1, 5, 5, 1, 1, 5]
    }, {
        name: 'Robert Smith', //The Cure
        image: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/5957743/331909458_hUfvDMuyRj/P6.jpg',
        scores: [4, 5, 2, 1, 1, 5, 2, 1, 4, 4, 4, 4, 1, 3, 5, 2, 1, 5, 4, 4]
    }, {
        name: 'Jack White', //White Stripes
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Jack_White_Ottawa.jpg',
        scores: [5, 1, 4, 1, 4, 4, 3, 2, 3, 4, 2, 5, 3, 5, 4, 3, 5, 1, 1, 1]
    }, {
        name: 'Trent Reznor', //9 Inch Nails
        image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1015367702%2F960x0.jpg%3Ffit%3Dscale',
        scores: [4, 1, 4, 1, 3, 3, 5, 2, 2, 3, 1, 2, 3, 5, 3, 2, 3, 4, 1, 5]
    }, {
        name: 'Billie Joe Armostrong', //Green Day
        images: 'https://www.billboard.com/files/styles/article_main_image/public/media/billie-joe-armstrong-2018-billboard-1548.jpg',
        scores: [4, 3, 4, 3, 5, 1, 1, 5, 1, 2, 4, 1, 5, 3, 1, 1, 4, 4, 1, 1]
    }, {
        name: 'Gerard Way', //My Chemical Romance
        images: 'https://www.google.com/search?q=gerard+way&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiJnY-0q5LjAhXXX80KHf57CxoQ_AUIECgB&biw=1194&bih=766#imgrc=cIwNNUUBqquTEM:',
        scores: [5, 2, 4, 4, 5, 1, 1, 2, 1, 3, 2, 3, 4, 2, 2, 2, 4, 3, 4, 3]
    }, {
        name: 'James Hetfield', //Metallica
        image: 'http://www2.pictures.gi.zimbio.com/James+Hetfield+Live+Earth+London+Show+EEw43jOLPqfl.jpg',
        scores: [3, 4, 2, 2, 2, 5, 3, 2, 3, 1, 5, 2, 1, 5, 2, 1, 1, 5, 3, 5]
    }, {
        nam: 'Axl Rose', //Guns N Roses
        images: 'https://townsquare.media/site/295/files/2018/07/rose.jpg',
        scores: [3, 5, 2, 1, 3, 5, 5, 3, 2, 2, 2, 4, 1, 5, 1, 3, 5, 5, 1, 5]
    }, {
        name: 'Pat Benatar', //Singer
        images: 'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTgwMTI3NzU2/pat-benatar-213028-1-402.jpg',
        scores: [2, 5, 2, 1, 1, 5, 3, 2, 5, 1, 2, 1, 5, 3, 5, 4, 2, 4, 1, 4]
    }, {
        name: 'Jon Bon Jovi', //Bon Jovi
        image: 'http://www2.pictures.zimbio.com/gi/Jon+Bon+Jovi+Bon+Jovi+Performs+MGM+Grand+rBUCUiWq-WDl.jpg',
        scores: [1, 5, 4, 1, 1, 2, 2, 1, 1, 4, 5, 3, 4, 3, 5, 3, 5, 2, 1, 1]
    }, {
        name: 'Tom Delonge', //Blink 182
        image: 'https://nyppagesix.files.wordpress.com/2017/08/gettyimages-143960825.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        scores: [4, 3, 4, 4, 4, 5, 5, 4, 3, 5, 1, 2, 5, 1, 1, 3, 5, 5, 1, 1]
    }, {
        name: 'Dan Reynolds', //Imagine Dragons
        image: 'https://ichef.bbci.co.uk/images/ic/720x405/p0545hfn.jpg',
        scores: [5, 1, 2, 2, 1, 1, 1, 5, 1, 4, 2, 4, 3, 4, 5, 2, 1, 1, 1, 3]
    }, {
        name: 'Jared Leto', //Thirty Seconds to Mars
        image: 'https://pixel.nymag.com/imgs/fashion/daily/2014/01/13/13-jared-leto-governors-awards.w700.h700.jpg',
        scores: [5, 2, 4, 3, 2, 5, 2, 1, 5, 3, 5, 1, 3, 1, 5, 5, 2, 4, 4, 3]
    }, {
        name: 'Rivers Cuomo', //Weezer
        image: 'https://argonautnews.com/wp-content/uploads/2014/01/3rivers.jpg',
        scores: [1, 1, 2, 1, 1, 4, 2, 3, 4, 2, 2, 5, 2, 4, 5, 2, 3, 1, 1, 1]
    }, {
        name: 'Ozzy Osbourne', //Black Sabbath
        image: 'https://komonews.com/resources/media/ee13c342-cc91-46c8-958b-34a1d692afef-large16x9_AP19038474092185.jpg?1549545435063',
        scores: [1, 5, 2, 1, 5, 3, 4, 5, 2, 3, 4, 2, 4, 1, 4, 2, 1, 1, 5, 4]
    }, {
        name: 'Alex Varkatzas', //Atreyu
        image: 'https://live.staticflickr.com/5603/15397764849_e7700f9145_b.jpg',
        scores: [5, 4, 3, 2, 5, 4, 5, 3, 5, 5, 2, 4, 4, 5, 4, 5, 3, 1, 4, 3]
    }, {
        name: 'Jonathan Davis', //Korn
        image: 'https://i1.wp.com/metalinjection.net/wp-content/uploads/2015/11/Jonathan-Davis-Korn.jpg?fit=700%2C394&ssl=1',
        scores: [4, 4, 3, 5, 5, 5, 3, 2, 1, 2, 4, 4, 3, 1, 5, 1, 4, 2, 3, 4]
    }
]

module.exports = musicians;