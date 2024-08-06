{/* <h2>Hey There!!🌝</h2><br> <h4>Welcome to Asif - Animated Website...</h4><br> <h3>I am Asif Mohamed Mohideen,</h3> <p>a recent graduate from Jerusalem College of Engineering in Chennai, where I completed my Bachelor's Degree in Information Technology (B.Tech) in 2024. Throughout my academic journey, I have developed a strong foundation in various aspects of IT, with a particular interest in front-end development. * As a fresher, I have focused my learning and projects on front-end technologies, where I’ve gained hands-on experience in HTML, CSS, and JavaScript. I am passionate about creating intuitive and engaging user interfaces that enhance user experience and contribute to the overall success of web applications. * During my studies, I completed several projects that allowed me to apply my skills in practical scenarios, such as developing responsive web designs and interactive websites. These projects not only solidified my technical abilities but also taught me the importance of collaboration, problem-solving, and continuous learning. * I am eager to bring my enthusiasm for front-end development to a dynamic team where I can contribute, grow, and continue to build on my knowledge and skills. I am particularly interested in opportunities that allow me to work on innovative projects and leverage my creativity to solve real-world problems.<p> <h3>Portfolio link: https://asifmohamed-portfolio.netlify.app/  </h3># Portfolio- */}

var animation = anime.timeline({
    autoplay: false
});

animation
.add({
    targets:'#btn',
    top: '1500px',
    duration: 500,
    easing:'easeInOutSine'
})


.add({
    targets:'#star',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#mountains_behind',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#mountains_front',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#moon',
    top: '0px',
    duration: 1000,
    easing:'easeInOutBack'
})

.add({
    targets:'#text',
    marginRight: '0px',
    duration: 1000,
    easing:'easeInOutBack'
})

.add({
    targets:'#btn',
    top: '50%',
    duration: 1000,
    easing:'easeInOutBack'
})
document.querySelector('#btn').onclick = animation.play;