import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import MyCardStyle from '../../../styles/mycard.module.css'
const Footer = () => {
  return (
    <div className={MyCardStyle.bg}>
      <div className="mx-auto max-w-6xl px-4 py-4 text-white">
        <div className="grid gap-3 md:grid-cols-5">
          {/* First Col */}
          <ul>
            <ul>
              <li> Company Info</li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </ul>
            <li>
              <Link href="/about">
                <a>Career</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>We Are Hiring</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          {/* Seonnd Col */}
          <ul>
            <li> Legal</li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Career</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>We Are Hiring</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          {/* Third Col */}
          <ul>
            <li> Features</li>
            <li>
              <Link href="/">
                <a>Business Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>User Analytics</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Live Chat</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Unlimited Support</a>
              </Link>
            </li>
          </ul>
          {/* Fourth Col */}
          <ul>
            <li> Resources</li>
            <li>
              <Link href="/">
                <a>IOS and Android</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Watch Demo</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Customers</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>API</a>
              </Link>
            </li>
          </ul>
          {/* Fifth Col */}
          <ul>
            <li> Get In Touch</li>
            <li className=" my-2 flex">
              <BsFillTelephoneFill className="mr-3" /> +88 01767 777777
            </li>
            <li className=" my-2 flex">
              <GoLocation className="mr-3" /> 4517 Washington Ave. Manchester,
            </li>
            <li className=" my-2 flex">
              <AiOutlineMail className="mr-3" /> MySchool@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
