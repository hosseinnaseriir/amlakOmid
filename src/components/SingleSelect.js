import {Form } from 'react-bootstrap';
function SingleSelect({val,title,name,myClass}) { 
    return (
        <Form.Group  className={"SingleSelect mb-3 "+myClass} >
            <Form.Select name={name} className='border-0 shadow-es'>
                <option>{title}</option>
                { val.map((value,index)=>(
                        <option value={index+1}>{value}</option>
                        ))
                }
            </Form.Select>
        </Form.Group>
    );
}

export default SingleSelect;