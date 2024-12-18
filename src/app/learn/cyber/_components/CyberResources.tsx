import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { cyberResources } from "@/data/resources/cyber";
import Link from "next/link";

export default function CyberResources() {
  return (
    <div className="space-y-8 p-4">
      {cyberResources.map((resource, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="rounded-lg bg-purple-800/30 p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-purple-200 underline">
                {resource.title}
              </h3>
              <p className="text-purple-400">{resource.type}</p>
            </div>
            <Link
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300"
            >
              <span>Visit</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
          {resource.overview && (
            <p className="mt-2 text-purple-300">{resource.overview}</p>
          )}
          {resource.features && (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-purple-300">
              {resource.features.map((feature, fIdx) => (
                <li key={fIdx}>{feature}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
