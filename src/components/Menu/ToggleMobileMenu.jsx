import React, { useEffect, useState } from 'react';
function ToggleMobileMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', isOpenMenu);
  }, [isOpenMenu]);

  return (
    <>
      <i
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={
          'mobile-nav-toggle d-xl-none bi ' + (!isOpenMenu ? 'bi-list' : 'bi-x')
        }
      ></i>
    </>
  );
}
export default ToggleMobileMenu;
