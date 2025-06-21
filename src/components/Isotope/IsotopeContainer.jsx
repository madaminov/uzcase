import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import WebpImage from '../WebpImage/WebpImage';

const IsotopeContainer = (props) => {
  const { filters, listsIsotope } = props;

  // init one ref to store the future isotope object
  const isotope = React.useRef;
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*');
  const [active, setActive] = React.useState('*');

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // handling filter key change
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
        {filters.map((filter) => (
          <li
            key={filter.key}
            onClick={handleFilterKeyChange(filter.key)}
            className={active == filter.key ? 'filter-active' : ''}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="row gy-4 isotope-container filter-container">
        {listsIsotope.map((list) => (
          <div
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
            />

            <div class="portfolio-info">
              <h3>{list.name}</h3>
              <p>{list.description}</p>
            </div>
            {list.link ? (
              <a href="{lsit.link}" class="details-link" title="More Details">
                <i class="bi bi-link-45deg"></i>
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
