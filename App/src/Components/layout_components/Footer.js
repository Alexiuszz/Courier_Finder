import React from "react";
import '../../styles/footer.css'
import LinkList from "../LinkList";

export default function Footer(props) {
    return (
        <div className='mainFooter'>
            <div className="footerTexts">
                <div className="footerAbout">
                    <p className="listHeader">About</p>
                    <LinkList className="footerLinks" items={['About', 'Contact', 'Privacy Policy', 'Terms of Use']} />
                </div>
                <div className="footerBiz">
                    <p className="listHeader">Business</p>
                    <LinkList className="footerLinks" items={['Logistics', 'Market', 'Tracker', 'Invest']} />
                </div>
                <div className="footerHelp">
                    <p className="listHeader">Help and Support</p>
                    <LinkList className="footerLinks" items={['Request and Deliver', 'Tracking', 'Technical Support']} />
                </div>
                <div className="footerPeople">
                    <p className="listHeader">People</p>
                    <LinkList className="footerLinks" items={['Affiliate Program', 'Couriers', 'Career']} />
                </div>
            </div>
        </div>
    )
}