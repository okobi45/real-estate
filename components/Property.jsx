import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

// This links directly to the listing
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => (
    <Link href={`/property/${externalId}`  } passHref>
        {title }
    </Link>
)

export default Property