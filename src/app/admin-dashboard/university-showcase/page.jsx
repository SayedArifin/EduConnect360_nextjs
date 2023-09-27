import BigCard from "@/components/BigCard";
import BigHeading from "@/components/BigHeading";
import MainButton from "@/components/MainButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";
import React from "react";
import { FaPlus, FaRegEdit, FaTrash } from "react-icons/fa";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto md:pt-10 lg:pt-20">
      <BigCard
        slot={
          <div className="p-6 rounded-xl shadow-lg space-y-4">
            <BigHeading
              text={"Manarat International University"}
              anotherText={"(Day & Eveing)"}
            />
            <div className=" text-2xl font-semibold text-secondary-red">
              General Information
            </div>
            <div className="space-y-2">
              <p>
                Current Ranking: <span className="font-semibold ml-2">15</span>
              </p>
              <p>
                Year of establishment:{" "}
                <span className="font-semibold ml-2">2001</span>
              </p>
              <p>
                Vice Chancellor:{" "}
                <span className="font-semibold ml-2">
                  Professor Dr. Md. Nazrul Islam
                </span>
              </p>
              <p>
                Registrar:{" "}
                <span className="font-semibold ml-2">Md, Manirul Islam</span>
              </p>
              <p>
                Website:{" "}
                <span className="font-semibold ml-2">www.manarat.ac.bd</span>
              </p>
              <p>
                Email:{" "}
                <span className="font-semibold ml-2">
                  admission@manarat.ac.bd; admin@manarat.ac.bd
                </span>
              </p>
            </div>
            <div>
              <div className="text-2xl font-semibold  text-secondary-red">
                Faculties
              </div>
              <fieldset className="bg-slate-500 p-5 my-5">
                <div className="">
                  <div className="flex flex-col justify-center items-center space-x-4">
                    <legend className="text-primary-white  text-2xl underline">
                      Permanent Campus
                    </legend>
                    <SecondaryButton href={"/"} text={<FaTrash />} />
                  </div>
                  <div className="">
                    <p>
                      Address:
                      <span className="ml-2">
                        Plot # CEN-16, Road # 106 Gulshan 2, Dhaka-1212
                        Bangladesh
                      </span>
                    </p>
                    <p>
                      Mobile No:<span className="ml-2">01572702411</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <table className="min-w-full table-auto border border-collapse border-gray-200">
                      <thead>
                        <tr className="bg-black text-white">
                          <th className="border p-2">Subject</th>
                          <th className="border p-2">Total Credits</th>
                          <th className="border p-2">Per Credit Cost</th>
                          <th className="border p-2">Total Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        {/* Add more rows with similar styling */}
                      </tbody>
                    </table>
                  </table>
                  <div className="bg-primary-white text-black p-5 my-5">
                    <p>
                      scholarship program offers financial assistance to
                      students based on their GPAs. The amount of assistance
                      varies depending on their academic performance, with a 5%
                      scholarship awarded to students whose GPAs fall between
                      7.50 and 7.99, a 10% scholarship for GPAs in the 8.00 to
                      8.49 range, a 15% scholarship for those achieving GPAs
                      between 8.50 and 8.99, a substantial 25% scholarship for
                      GPAs ranging from 9.00 to 9.49, an impressive 50%
                      scholarship for GPAs between 9.50 and 9.99, and the
                      highest possible reward, a full 100% scholarship, reserved
                      for those who attain a perfect GPA of 10.00.
                    </p>
                  </div>
                </div>
              </fieldset>
              <fieldset className="bg-slate-500 p-5 my-5">
                <div className="">
                  <div className="flex flex-col justify-center items-center space-x-4">
                    <legend className="text-primary-white  text-2xl underline">
                      Ashulia Campus
                    </legend>
                    <SecondaryButton href={"/"} text={<FaTrash />} />
                  </div>
                  <div className="">
                    <p>
                      Address:
                      <span className="ml-2">
                        Ashulia Model Town, Khagan, Ashulia Dhaka
                      </span>
                    </p>
                    <p>
                      Mobile No:<span className="ml-2">01572702411</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <table className="min-w-full table-auto border border-collapse border-gray-200">
                      <thead>
                        <tr className="bg-black text-white">
                          <th className="border p-2">Subject</th>
                          <th className="border p-2">Total Credits</th>
                          <th className="border p-2">Per Credit Cost</th>
                          <th className="border p-2">Total Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                        <tr className="bg-red-500 text-white">
                          <td className="border p-2">BBA</td>
                          <td className="border p-2">140</td>
                          <td className="border p-2">2600</td>
                          <td className="border p-2">50000</td>
                        </tr>
                      </tbody>
                    </table>
                  </table>
                  <div className="bg-primary-white text-black p-5 my-5">
                    <p>
                      scholarship program offers financial assistance to
                      students based on their GPAs. The amount of assistance
                      varies depending on their academic performance, with a 5%
                      scholarship awarded to students whose GPAs fall between
                      7.50 and 7.99, a 10% scholarship for GPAs in the 8.00 to
                      8.49 range, a 15% scholarship for those achieving GPAs
                      between 8.50 and 8.99, a substantial 25% scholarship for
                      GPAs ranging from 9.00 to 9.49, an impressive 50%
                      scholarship for GPAs between 9.50 and 9.99, and the
                      highest possible reward, a full 100% scholarship, reserved
                      for those who attain a perfect GPA of 10.00.
                    </p>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        }
      />
      <div className="flex justify-center content-center mb-10">
        <div className="mr-5">
          <MainButton href={"/"} text={"Add New Branch"} icon={<FaPlus />} />
        </div>
        <MainButton href={"/"} text={"Edit Branch"} icon={<FaRegEdit />} />
      </div>
    </div>
  );
};

export default Page;
