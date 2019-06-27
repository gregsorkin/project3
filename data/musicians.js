// Assign: Gino, Greg, Trevor

/*
Note: Here we are going to add 'user data', by user data I mean the matches.
Each user will be their own object. This structure will be similar to what we did with the FriendFinder assignment.
It is important to note that answers associated with each user need to be unique.
In FriendFinder we had array of numbers that correlated with the choices to a survey.
We want these users to have answers that are relatable. For example, lets say Jon was into guitar, bass and drums. He is
also a drummer in a Metal Band. Therefore, it's likely that his music interest and taste will be very specific.
As we make these user - objects well want to consult the questions when we put numbers into the array.
*/

// The Tricky Part
/*
-We will be using multiple surveys of questions all pertaining to music.
-Previously our array connected to one survey, the challenge will be multiple arrays connecting to multiple surveys.
-This is where REACT will come in.*
-If needed we can merge all the questions into one but this is a LAST resort.
-We don't want to merge everything because our goal is for our modal to pull actual profiles if possible. Not just a pic and a name.
*/

//Note
/*
-In terms of images for the users, to keep it interesting, our 'users' will be actual musicans/artists.
-That will create an even more personable match, and it will be visually pleasing when we present.
-What I mean by this, if I was into Metal, Goth, Guitar, and sang... I may get matched with Marilyn Manson (his pic).
*/

const musicians = [
    {
        name: "Marilyn Manson",
        image: "http://www.providermodule.com/news/uploads/hud-perou3-th.jpg",
        scores: []
    }, {
        name: "Gene Simmons",
        image: "https://www.gannett-cdn.com/-mm-/ef5b6ae4a5f1dda929869a48e2e9e4269eeb6758/c=551-0-5761-3917/local/-/media/2018/07/09/USATODAY/USATODAY/636667309176728434-EPA-SPAIN-MUSIC-101317555.JPG?width=540&height=405&fit=crop",
        scores: []
    }, {
        name: "Nancy Wilson",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Nancy_Wilson_Sydney_2011.jpg",
        scores: []
    }, {
        name: "Janis Joplin",
        image: "https://mypoeticside.com/wp-content/uploads/gallery-images/aafc615.jpeg",
        scores: []
    }, {
        name: "Prince",
        image: "https://s26162.pcdn.co/wp-content/uploads/2016/04/Prince-thumbnail-4.jpg",
        scores: []
    }, {
        name: "Robert Smith",
        image: "https://d2h1pu99sxkfvn.cloudfront.net/b0/5957743/331909458_hUfvDMuyRj/P6.jpg",
        scores: []
    }, {
        name: "Jack White",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Jack_White_Ottawa.jpg",
        scores: []
    }, {
        name: "David Bowie",
        image: "http://america.aljazeera.com/content/ajam/articles/2016/1/11/david-bowie-a-shapeshifter-whose-genius-survived-every-transformation/jcr:content/image.img.jpg",
        scores: []
    }, {
        name: "Michael Fitzgerald",
        image: "https://live.staticflickr.com/6082/6133590373_0fbab5a8bc_b.jpg",
        scores: []
    }, {
        name: "John Gourley",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/John_Baldwin_Gourley_at_2010_Sasquatch%21_Festival.jpg",
        scores: []
    }, {
        name: "Brian Mazzaferri",
        image: "http://i.imgur.com/RLb36Nf.jpg",
        scores: []
    }
]

module.exports = musicians;