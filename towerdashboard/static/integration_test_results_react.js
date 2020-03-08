'use strict';

const e = React.createElement;

class FilterTableDemo extends React.Component {

    renderSquare(i) {
      return <Square value={i} />;
    }
}

const rootElement = document.getElementById("table");
ReactDOM.render(e(FilterTableDemo), rootElement);