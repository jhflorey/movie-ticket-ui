import * as React from 'react';
import GenreManagement from "../../components/GenreManagement";
import GeneralActions from "../../actions/generalActions";
import ITFGeneralActions from "../../interfaces/generalActions";

interface IGenresContainerProps {
}

const GenresContainer: React.FunctionComponent<IGenresContainerProps & ITFGeneralActions> = (props) => {
  const getData = props.getData;

  React.useEffect(() => {
    getData("genres");
  }, [getData])

  return (
    <React.Fragment>
      <GenreManagement />
    </React.Fragment>
  );
};

export default GeneralActions(GenresContainer);
