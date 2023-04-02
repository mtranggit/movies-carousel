// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  {
    title: "Halo",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
  },
  {
    title: "Doctor Strange",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    title: "The Lost City",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  },
  {
    title: "Shang-Chi",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    title: "Turning Red",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  },
  {
    title: "Encanto",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  },
  {
    title: "Adam Project",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    title: "Morbius",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  },
];

export function App() {

  const slides = images.map(({image}) => (
    <Carousel.Slide key={image}>
      <Image src={image} />
    </Carousel.Slide>
  ));

  return (
    // <div className={styles.container}>This is a cool carousel</div>
    <Carousel maw={320} mx="auto" withIndicators height={200}>
      {slides}
    </Carousel>
  );
}

export default App;

