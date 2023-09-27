import React, { Suspense } from "react";
import SecondaryButton from "./SecondaryButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

const UniversityLink = ({ u_id, u_name, u_website }) => {
  return (
    <Link
      href={`/admin-dashboard/university-showcase/${u_id}`}
      class="bg-black hover:bg-amber-950 p-4 rounded-lg shadow-md my-2 flex  justify-between items-center"
    >
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="">
          <p class="text-xl font-semibold">{u_name}</p>
          <p className="text-secondary-white font-sm">{u_website}/</p>
        </div>
        <div class="flex mt-2">
          <SecondaryButton href={"/"} text={<FaEdit />} />
          <SecondaryButton href={"/"} text={<FaTrash />} />
        </div>
      </Suspense>
    </Link>
  );
};

export default UniversityLink;
