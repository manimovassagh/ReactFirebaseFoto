import {useState,useEffect} from 'react';
import {projectStorage} from '../firebase/config';

const useStorage=(file) =>{
const [progress,SetProgress]=useState(0);
const [error,setError]=useState(null);
const [url,setUrl]=useState(null);

}