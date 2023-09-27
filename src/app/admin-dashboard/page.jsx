"use client";
import React, { useState, useEffect } from "react";
import BigCard from "@/components/BigCard";
import MainButton from "@/components/MainButton";
import SearchBar from "@/components/SearchBar";
import UniversityLink from "@/components/UniversityLink";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_UNIVERSITY_API_URL)
      .then((response) => {
        const universitiesData = response.data.universities;
        setUniversities(universitiesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" ">
      <div className="max-w-screen mx-auto md:pt-10 lg:pt-20  flex flex-col ">
        <SearchBar />
        <div className="mx-auto my-2">
          <MainButton
            href={"admin-dashboard/add-university"}
            text={"Add New University"}
            icon={<FaSearch />}
          />
        </div>

        {loading ? (
          <div className="text-center my-4">
            <p>Loading...</p>
          </div>
        ) : (
          <BigCard
            slot={
              <>
                {universities.map((u) => (
                  <div key={u._id}>
                    <UniversityLink
                      u_id={u._id}
                      u_name={u.name}
                      u_website={u.officialWebsite}
                    />
                  </div>
                ))}
              </>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Page;
