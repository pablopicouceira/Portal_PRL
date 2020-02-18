import React from "react";
import { getNotObsoletDocuments } from "../http/documentsService";

export function VictoryPie() {
  const [notObsoletDocuments, setNotObsoletDocuments] = useState([]);
  useEffect(() => {
    getNotObsoletDocuments().then(response => console.log(response.data));
  }, []);
}
