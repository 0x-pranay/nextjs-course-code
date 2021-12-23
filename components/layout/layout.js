import MainHeader from './main-header';

const { Fragment } = require('react');

function Layout(props) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
