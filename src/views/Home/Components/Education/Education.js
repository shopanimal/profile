import React from "react";
import PropTypes from "prop-types";
import "./Css.css";
const Education = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center title-component">
          <h2>Education</h2>
        </div>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-badge">
            <i className="glyphicon glyphicon-check" />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              <p>
                <small className="text-muted">
                  <i className="glyphicon glyphicon-time" /> 11 hours ago via
                  Twitter
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                elitis. Pra lá , depois divoltis porris, paradis. Paisis,
                filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros
                vermeio, in elementis mé pra quem é amistosis quis leo. Manduma
                pindureta quium dia nois paga. Sapien in monti palavris qui num
                significa nadis i pareci latim. Interessantiss quisso pudia ce
                receita de bolis, mais bolis eu num gostis.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge warning">
            <i className="glyphicon glyphicon-credit-card" />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
            </div>
            <div className="timeline-body">
              <p>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                elitis. Pra lá , depois divoltis porris, paradis. Paisis,
                filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros
                vermeio, in elementis mé pra quem é amistosis quis leo. Manduma
                pindureta quium dia nois paga. Sapien in monti palavris qui num
                significa nadis i pareci latim. Interessantiss quisso pudia ce
                receita de bolis, mais bolis eu num gostis.
              </p>
              <p>
                Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Interagi no mé, cursus quis, vehicula ac
                nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus
                a, posuere ut mi. Ut scelerisque neque et turpis posuere
                pulvinar pellentesque nibh ullamcorper. Pharetra in mattis
                molestie, volutpat elementum justo. Aenean ut ante turpis.
                Pellentesque laoreet mé vel lectus scelerisque interdum cursus
                velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam ac mauris lectus, non scelerisque augue. Aenean
                justo massa.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

Education.propTypes = {};

export default Education;
