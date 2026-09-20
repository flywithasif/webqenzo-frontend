import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50/70 blur-2xl transition-all duration-300 group-hover:bg-blue-100/70" />

      <div className="relative flex items-start justify-between gap-4">
        {/* Content */}
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-400">
            {title}
          </p>

          <h3 className="mt-2.5 text-[30px] font-bold leading-none tracking-[-0.035em] text-slate-950">
            {value}
          </h3>

          {description && (
            <p className="mt-2.5 line-clamp-2 text-[11px] font-medium leading-5 text-slate-400">
              {description}
            </p>
          )}
        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/15">
          <Icon
            size={19}
            strokeWidth={1.9}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </motion.div>
  );
};

export default StatCard;
