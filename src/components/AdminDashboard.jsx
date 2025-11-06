"use strict";

// Components
import AdminSubHeader from "./AdminSubHeader";
import OverviewCard from "./OverviewCard";

// ICONS
import { IoMdPeople } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

import { useContext } from "react";

// getting admin page context
import { AdminContext } from "../../pages/Admin";

const AdminDashboard = () => {
  const { toggleAside } = useContext(AdminContext);

  return (
    <div>
      <AdminSubHeader
        containerClass={"flex-col gap-10 pt-16 hidden md:flex"}
        title={`Admin Dashboard`}
        titleClass={`font-bold text-[2.8rem] text-[#504230] capitalize`}
        text={`Overview of your application.`}
        textClass={`text-[#8a775c]`}
      />

      <div className="mt-12 md:hidden">
        <div className="flex items-center gap-8">
          <button
            onClick={toggleAside}
            type="button"
            className="p-4 border border-[#ddddb5] rounded-lg cursor-pointer"
          >
            <IoMdMenu />
          </button>
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid gap-12 mt-16 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title={"Total Users"}
          icon={<IoMdPeople />}
          number={"150"}
        />
        <OverviewCard
          title={"Total Orders"}
          icon={<FaShoppingCart />}
          number={"+2350"}
        />
        <OverviewCard
          title={"Total Bookings"}
          icon={<FaCalendar />}
          number={"+573"}
        />
        <OverviewCard
          title={"Pending Complaints"}
          icon={<BiSolidComment />}
          number={"12"}
        />
      </div>

      <div className="grid gap-12 md:grid-cols-2 mt-12">
        <div className="bg-[#f7f7e3] drop-shadow-sm p-10 rounded-xl flex flex-col gap-12">
          <AdminSubHeader
            containerClass={"flex flex-col gap-2"}
            title={"Recent Orders"}
            titleClass={"text-4xl font-semibold  text-[#504230] capitalize"}
            text={"A list of the most recent orders."}
            textClass={"text-2xl text-[#8a775c]"}
          />
          <div className="p-4 pt-0 overflow-x-auto">
            <div className=" relative w-full overflow-x-auto md:overflow-x-visible overflow-y-hidden scroll-smooth">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b border-[#ddddb5] transition-colors hover:bg-[#f5f5db] data-[state=selected]:bg-muted">
                    <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-[#8a775c]">
                      customer
                    </th>
                    <th className="h-12 p-8 text-left capitalize text-2xl align-middle font-medium text-[#8a775c]">
                      status
                    </th>
                    <th className="h-12 p-8 text-right capitalize  text-2xl align-middle font-medium text-[#8a775c]">
                      amount
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b border-[#ddddb5] transition-colors text-2xl hover:bg-[#f5f5db] data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      User1
                    </td>
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-[#ddddb5] px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Completed
                      </div>
                    </td>
                    <td class="p-8 align-middle text-[#504230] [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦115,000
                    </td>
                  </tr>

                  <tr className="border-b border-[#ddddb5] transition-colors text-2xl hover:bg-[#f5f5db] data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      User2
                    </td>
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-[#ddddb5] px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Processing
                      </div>
                    </td>
                    <td class="p-8 align-middle text-[#504230] [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦75,000
                    </td>
                  </tr>
                  <tr className="border-b border-[#ddddb5] transition-colors text-2xl hover:bg-[#f5f5db] data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      User3
                    </td>
                    <td className="p-8 align-middle text-[#504230] [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-[#ddddb5] px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Pending
                      </div>
                    </td>
                    <td class="p-8 align-middle text-[#504230] [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦92,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7e3] drop-shadow-sm p-10 rounded-xl">
          <AdminSubHeader
            containerClass={"flex flex-col gap-2"}
            title={"Recent Users"}
            titleClass={"text-4xl font-semibold  text-[#504230] capitalize"}
            text={"The latest users who signed up."}
            textClass={"text-2xl text-[#8a775c]"}
          />
          <div className="py-12">
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-[#eaead5] flex items-center justify-center">
                <span className="capitalize">J</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[#504230] text-[1.6rem] font-semibold capitalize">
                  John Doe
                </p>
                <p className="text-[#8a775c] text-[1.4rem] leading-2">
                  john.doe@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-[#eaead5] flex items-center justify-center">
                <span className="capitalize">J</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[#504230] text-[1.6rem] font-semibold capitalize">
                  Jane Smith
                </p>
                <p className="text-[#8a775c] text-[1.4rem] leading-2">
                  jane.smith@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-[#eaead5] flex items-center justify-center">
                <span className="capitalize">a</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[#504230] text-[1.6rem] font-semibold capitalize">
                  Alice Johnson
                </p>
                <p className="text-[#8a775c] text-[1.4rem] leading-2">
                  alic.johnson@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
