import { Link } from 'react-router-dom';
import tw from "twin.macro";

export const PrimaryButtonLink = tw(Link)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
