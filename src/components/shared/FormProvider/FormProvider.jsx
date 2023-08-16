/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/FormProvider/FormProvider.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 12th 2023, 1:38:05 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import PropTypes from "prop-types";
// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
