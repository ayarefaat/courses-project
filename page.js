$(function(){
    let target_course_id = location.href.slice(location.href.lastIndexOf("=id?")+4);
    let target_course;
    for(let i=0 ; i< coursesData.length ; i++){
        if(target_course == coursesData[i]){
            target_course = coursesData[i];
            console.log(coursesData[i]);
            break;
        }
    }
    //Aos Animation
    AOS.init();
    //fixed nav-bar
    $(window).on("scroll" , function(){
        var scrollDistance = $(this).scrollTop()
        if($(this).scrollTop() > 50){
            $(".navbar").addClass("navbar-fixed")
        }
        else{
            $(".navbar").removeClass("navbar-fixed")
        }
        $(".section").each(function(i){
            if($(this).offset().top <=scrollDistance){
                $(".navbar-nav li.active").removeClass("active");
                $(".navbar-nav li").eq(i).addClass("active");
            }
        })
    })
    //Courses data

    let coursesData =[
        {
            img: "image/img_5.jpg",
            price : "$200",
            lessons : 12,
            weeks : 3,
            courseName : "Logo Design Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 2300 ,
            message : 10
        },
        {
            img: "image/img_6.jpg",
            price : "$300",
            lessons : 12,
            weeks : 3,
            courseName : "Web Design Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 2300 ,
            message : 10
        },
        {
            img: "image/img_2.jpg",
            price : "$250",
            lessons : 8,
            weeks : 5,
            courseName : "Android Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 1000 ,
            message : 3
        },
        {
            img: "image/img_3.jpg",
            price : "$90",
            lessons : 20,
            weeks : 5,
            courseName : "JS Programming Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 1500 ,
            message : 15
        },
        {
            img: "image/img_4.jpg",
            price : "$150",
            lessons : 9,
            weeks : 5,
            courseName : "C++ Programming Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 2600 ,
            message : 13
        },
        {
            img: "image/img_1.jpg",
            price : "$100",
            lessons : 16,
            weeks : 4,
            courseName : "Java Programming Course",
            courseDesc :"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            users : 2100 ,
            message : 5
        },
    ]
    let coursesWrapper=""
    for(let course of coursesData){
        coursesWrapper+=`
        <div class="">
                    <div class="item">
                        <div class="img-holder">
                            <img src="${course.img}" alt="">
                        </div>
                        <div class="price d-flex justify-content-end ">
                            <span class=" main-bgcolor d-inline-block">${course.price}</span>
                        </div>
                        <div class="main-info">
                            <div class="weeks">
                                    <i class="fas fa-clock"></i>
                                    <span>${course.lessons} lessons /</span>
                                    <span>${course.weeks} weeks</span>
                            </div>
                            <div class="course-name">
                                <h3>${course.courseName}</h3>
                                <p>${course.courseDesc}</p>
                            </div>
                        </div>
                        <div class="additional-info">
                            <div class="users">
                                <i class="fas fa-users"></i>
                                <span>${course.users} Students</span>
                            </div>
                            <div class="messages">
                                <i class="fas fa-comment"></i>
                                <span>${course.message}</span>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    $("#Courses .courses-item").html(coursesWrapper);
    $("#Courses .courses-item").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots : false,
        navText: ["Prev", "Next"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
            
        }
    });
    
})    