"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader";
import { X } from "lucide-react";

const loadingStates = [
    {
        text: "Initializing Portfolio...",
    },
    {
        text: "Authenticating context...",
    },
    {
        text: "Assembling technical stacks...",
    },
    {
        text: "Fetching project repositories...",
    },
    {
        text: "Syncing design milestones...",
    },
    {
        text: "Optimizing visual assets...",
    },
    {
        text: "Finalizing your experience...",
    },
    {
        text: "Welcome to Jay Kumar's Portfolio",
    },
];

export function MultiStepLoaderDemo() {
    const [loading, setLoading] = useState(false);
    return (
        <div className="w-full h-[60vh] flex items-center justify-center">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
            <button
                onClick={() => setLoading(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                style={{
                    boxShadow:
                        "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                }}
            >
                Click to load
            </button>

            {loading && (
                <button
                    className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                    onClick={() => setLoading(false)}
                >
                    <X className="h-10 w-10" />
                </button>
            )
            }
        </div >
    );
}
