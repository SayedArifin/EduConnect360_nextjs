"use client";
import BigCard from "@/components/BigCard";
import BigHeading from "@/components/BigHeading";
import StylishInput from "@/components/Input";
import RadioButton from "@/components/Radio";
import SubmitBtn from "@/components/SubmitBtn";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      await axios.post("/api/university", formData);
      console.log("Form data saved successfully");
      router.push("/");
    } catch (error) {
      console.error("Error saving form data", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:pt-10 lg:pt-20">
      <BigCard
        slot={
          <>
            <BigHeading text={"Add University"} />
            <div className=" text-2xl font-semibold text-secondary-red">
              General Information
            </div>
            <div className="space-y-2">
              <form onSubmit={handleSubmit}>
                <StylishInput
                  label={"university Name"}
                  onChange={handleChange}
                  name={"name"}
                />
                <StylishInput
                  label={"Current Ranking"}
                  type={"number"}
                  onChange={handleChange}
                  name={"rank"}
                />
                <StylishInput
                  label={"Year of Establishment"}
                  type={"number"}
                  onChange={handleChange}
                  name={"yearEstablished"}
                />
                <StylishInput
                  label={"Vice Chancellor"}
                  onChange={handleChange}
                  name={"viceChancellor"}
                />
                <StylishInput
                  label={"Registrar"}
                  name={"registrar"}
                  onChange={handleChange}
                />
                <StylishInput
                  label={"Official Website"}
                  onChange={handleChange}
                  name={"officialWebsite"}
                />
                <StylishInput
                  label={"Email Address"}
                  type={"email"}
                  onChange={handleChange}
                  name={"emailAddress"}
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
                />

                <SubmitBtn text={"Add University"} onSubmit={handleSubmit} />
              </form>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Page;
