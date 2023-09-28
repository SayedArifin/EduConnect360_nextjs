"use client";
import BigCard from "@/components/BigCard";
import BigHeading from "@/components/BigHeading";
import StylishInput from "@/components/Input";
import RadioButton from "@/components/Radio";
import SubmitBtn from "@/components/SubmitBtn";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    yearEstablished: "",
    viceChancellor: "",
    registrar: "",
    officialWebsite: "",
    emailAddress: "",
    classSchedules: "",
  });
  const { id } = params;

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_UNIVERSITY_API_URL + `/${id}`)
      .then((response) => {
        const universityData = response.data.university;

        setFormData(universityData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      await axios
        .put(process.env.NEXT_PUBLIC_UNIVERSITY_API_URL + `/${id}`, formData)
        .then(function (response) {
          router.push(`/admin-dashboard/university-showcase/${id}`);
        });
    } catch (error) {
      console.error("Error saving form data", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:pt-10 lg:pt-20">
      <BigCard
        slot={
          <>
            <BigHeading text={"Edit University"} />
            <div className=" text-2xl font-semibold text-secondary-red">
              General Information
            </div>
            <div className="space-y-2">
              <form onSubmit={handleSubmit}>
                <StylishInput
                  label={"university Name"}
                  onChange={handleChange}
                  name={"name"}
                  value={formData.name}
                />
                <StylishInput
                  label={"Current Ranking"}
                  type={"number"}
                  onChange={handleChange}
                  name={"rank"}
                  value={formData.rank}
                />
                <StylishInput
                  label={"Year of Establishment"}
                  type={"number"}
                  onChange={handleChange}
                  name={"yearEstablished"}
                  value={formData.yearEstablished}
                />
                <StylishInput
                  label={"Vice Chancellor"}
                  onChange={handleChange}
                  name={"viceChancellor"}
                  value={formData.viceChancellor}
                />
                <StylishInput
                  label={"Registrar"}
                  name={"registrar"}
                  onChange={handleChange}
                  value={formData.registrar}
                />
                <StylishInput
                  label={"Official Website"}
                  onChange={handleChange}
                  name={"officialWebsite"}
                  value={formData.officialWebsite}
                />
                <StylishInput
                  label={"Email Address"}
                  type={"email"}
                  onChange={handleChange}
                  name={"emailAddress"}
                  value={formData.emailAddress}
                />
                <RadioButton
                  label={"Class Schedules"}
                  options={[
                    { label: "Day Only", value: "1" },
                    { label: "Evening Only", value: "2" },
                    { label: "Day and Evening", value: "3" },
                  ]}
                  name={"classSchedules"}
                  onChange={handleChange}
                  value={formData.classSchedules}
                />

                <SubmitBtn text={"Edit University"} onSubmit={handleSubmit} />
              </form>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Page;
