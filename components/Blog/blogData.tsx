import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "In today's digital age, where user experience is paramount, the role of user interface (UI) components in web design cannot be overstated. From captivating visuals to seamless interactions, UI components define the modern website experience. In this blog post, we'll dive into some of the best UI components that have revolutionized web design, enhancing both aesthetics and functionality.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Milan Thapa",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Design is a constantly evolving field that thrives on innovation and creativity. Whether you're a seasoned designer or just starting your creative journey, there's always room to enhance your design skills. In this blog post, we'll explore nine simple yet effective ways to improve your design prowess and create more captivating and impactful visuals.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rohan Rustagi",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Efficiency in coding is not just about typing speed; it's about optimizing your workflow, utilizing shortcuts, and embracing best practices. In this blog post, we'll delve into practical tips that can significantly enhance your coding speed without sacrificing code quality.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Milan Thapa",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2023",
  },
];
export default blogData;
