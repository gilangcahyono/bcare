import {Link} from 'react-router-dom';

export default function Carousel({datas, source}) {
  return (
    <section id="articles" className="mb-3">
      <h3 className="text-xl font-bold mb-2">New Articles</h3>
      <div className="carousel carousel-center w-full py-1">
        {datas &&
          datas.map((data) => (
            <Link key={data.id} to={`/${source}?data=${JSON.stringify(data)}`}>
              <div className="carousel-item mr-2 w-[55vw] h-[30vh] shadow rounded-lg">
                <img
                  className="w-full object-cover rounded-lg"
                  src={data.thumbnail}
                  alt={data.title}
                />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
