import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import WebpImage from '../WebpImage/WebpImage';
import Isotope from 'isotope-layout';

const IsotopeContainer = (props) => {
  const { filters, listsIsotope } = props;

  const isotope = React.useRef(null);

  const [filterKey, setFilterKey] = React.useState('*');
  const [active, setActive] = React.useState('*');

  useEffect(() => {
    const container = document.querySelector('.filter-container');
    const imgLoad = imagesLoaded(container, () => {
      isotope.current = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
      });
    });

    return () => {
      isotope.current?.destroy();
      imgLoad?.off?.(); // очистка imagesLoaded
    };
  });

  useEffect(() => {
    if (filterKey === '*') isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey, active]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActive(key);
  };

  return (
    <div className="isotope-layout">
      <ul className="portfolio-filters isotope-filters">
        {filters.map((filter, index) => (
          <li
            key={index}
            onClick={handleFilterKeyChange(filter.key)}
            className={active === filter.key ? 'filter-active' : ''}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="row gy-4 isotope-container filter-container">
        {listsIsotope.map((list, index) => (
          <div
            key={index}
            className={
              'col-lg-4 col-md-6 portfolio-item isotope-item filter-item ' +
              list.filter
            }
          >
            <WebpImage
              src={list.img}
              alt={list.name}
              className="img-fluid"
              style={{}}
              loadingLazy={false}
            />

            <div className="portfolio-info">
              <h3>{list.name}</h3>
              <p>{list.description}</p>
            </div>
            {list.link ? (
              <a href={list.link} className="details-link" title="More Details">
                <i className="bi bi-link-45deg"></i>
              </a>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsotopeContainer;
