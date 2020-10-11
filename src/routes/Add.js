import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Add() {
  const [isSaving, setIsSaving] = useState(false);

  function handleSubmit(e) {
    setIsSaving(true);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="What are you drinking today?"
        type="search"
        placeholder="Beer name"
      />
      <Input label="Any thoughts about it?" placeholder="Bitter but good" />
      <Input
        label="Let's give it a score"
        placeholder="5 stars, would drink again"
      />
      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save this beer"}
      </Button>
    </form>
  );
}
