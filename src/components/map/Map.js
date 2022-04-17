import Iframe from 'react-iframe'
function MyMap() { 
  return (
            <Iframe  className="MyMap rounded-3"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d433.5101816179582!2d52.51992661679236!3d29.630377444816173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1642235184475!5m2!1sen!2snl" 
            width="100%"
            height="450px"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"/>
  );
}

export default MyMap;