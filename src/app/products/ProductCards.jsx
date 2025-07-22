import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/cardbg.png")', headerBg: "linear-gradient(90deg, #5B2A7C 0%, #431B5A 100%)" },
  {
    title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/concert.jpg")', headerBg: "linear-gradient(90deg, #CD670A 0%, #CA3722 100%)", chips: [{
      label: "Access to ConneXions & Investor Lounge",
      active: true
    },
    {
      label: "Network Events",
      active: true
    }, {
      label: "All Conference Tracks",
      active: true
    },
    {
      label: "All Masterclasses",
      active: true
    },
    {
      label: "3 Days Access to the Show",
      active: true
    },
    {
      label: "Access to Dubai Internet City Lounge",
      active: true
    },]
  },

  { title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/concert.jpg")', badge: "EXCLUSIVE", headerBg: "linear-gradient(90deg, #173903 0%, #081D01 100%)" ,
    chips: [{
      label: "Access to ConneXions & Investor Lounge",
      active: true
    },
    {
      label: "Network Events",
      active: true
    }, {
      label: "All Conference Tracks",
      active: true
    },
    {
      label: "All Masterclasses",
      active: true
    },
    {
      label: "3 Days Access to the Show",
      active: false
    },
    {
      label: "Access to Dubai Internet City Lounge",
      active: false
    },]
  },
  { title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/concert.jpg")', badge: "BEST SELLER", headerBg: "linear-gradient(90deg, #B5040A 0%, #631308 100%)",
    chips: [{
      label: "Access to ConneXions & Investor Lounge",
      active: true
    },
    {
      label: "Network Events",
      active: true
    }, {
      label: "All Conference Tracks",
      active: true
    },
    {
      label: "All Masterclasses",
      active: true
    },
    {
      label: "3 Days Access to the Show",
      active: true
    },
    {
      label: "Access to Dubai Internet City Lounge",
      active: true
    },]
   },
  { title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/concert.jpg")', headerBg: "linear-gradient(90deg, #53BE2C 0%, #27870C 100%)" ,
    chips: [{
      label: "Access to ConneXions & Investor Lounge",
      active: true
    },
    {
      label: "Network Events",
      active: true
    }, {
      label: "All Conference Tracks",
      active: true
    },
    {
      label: "All Masterclasses",
      active: true
    },
    {
      label: "3 Days Access to the Show",
      active: true
    },
    {
      label: "Access to Dubai Internet City Lounge",
      active: true
    },]
  },
  { title: "Visitor 3 Day Access Ticket", bgImg: 'url("./cards/concert.jpg")', headerBg: "linear-gradient(90deg, #004D98 0%, #01277C 100%)" ,
    chips: [{
      label: "Access to ConneXions & Investor Lounge",
      active: true
    },
    {
      label: "Network Events",
      active: true
    }, {
      label: "All Conference Tracks",
      active: true
    },
    {
      label: "All Masterclasses",
      active: true
    },
    {
      label: "3 Days Access to the Show",
      active: false
    },
    {
      label: "Access to Dubai Internet City Lounge",
      active: false
    },]
  },

]
export default function ProductCards() {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}


    </div>
  )
}
