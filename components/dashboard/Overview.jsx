"use client";

import apiClient from "@services/api-client";
import { useState, useEffect } from "react";

const Overview = () => {
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await apiClient.get(
          "/users/64d9f9b49616104f3f1159ea/profile",
          {
            withCredentials: true,
          }
        );

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return <div>Overview</div>;
};

export default Overview;
