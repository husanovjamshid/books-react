import { Containers } from "../Header/header.style";
import { AuthTitle, AuthWrap, TabWrap } from "./authCat.style";
import '../../MainPage/main.css'

export const AuthCategory = () => {
  return (
    <Containers>
      <AuthWrap>
        <AuthTitle>Asosiy kategoriyalar</AuthTitle>

        <TabWrap>
          <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
              >
                Temuriylar davri
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
              >
                Jadid adabiyoti
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
              >
                Sovet davri
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-4"
                data-mdb-toggle="tab"
                href="#ex1-tabs-4"
                role="tab"
                aria-controls="ex1-tabs-4"
                aria-selected="false"
              >
                Mustaqillik davri
              </a>
            </li>
          </ul>
          <div className="tab-content" id="ex1-content">
            <div
              className="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
              Tab 1 content
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-2"
              role="tabpanel"
              aria-labelledby="ex1-tab-2"
            >
              Tab 2 content
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-3"
              role="tabpanel"
              aria-labelledby="ex1-tab-3"
            >
              Tab 3 content
            </div>
            <div
              className="tab-pane fade"
              id="ex1-tabs-4"
              role="tabpanel"
              aria-labelledby="ex1-tab-4"
            >
              Tab 4 content
            </div>
          </div>
        </TabWrap>
      </AuthWrap>
    </Containers>
  );
};
