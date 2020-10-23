import React, { useState } from "react";
// import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Add() {
  const [isSaving, setIsSaving] = useState(false);
  const [beer, setBeer] = useState({
    name: "",
    review: "",
    rating: 0,
  });

  function handleSubmit(e) {
    setIsSaving(true);
    e.preventDefault();
  }

  function handleNameChange(e) {
    setBeer({
      ...beer,
      name: e.target.value,
    });
  }

  function handleReviewChange(e) {
    setBeer({
      ...beer,
      review: e.target.value,
    });
  }

  function handleRatingChange(e) {
    setBeer({
      ...beer,
      rating: e.target.value,
    });
  }

  const disabled = !beer.name || !beer.rating;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={beer.name}
        onChange={handleNameChange}
        label="What are you drinking today?"
        placeholder="Beer name"
      />
      <Input
        value={beer.review}
        onChange={handleReviewChange}
        label="Any thoughts about it?"
        placeholder="Bitter but good"
      />
      <Input
        value={beer.rating}
        onChange={handleRatingChange}
        label="Let's give it a score"
        placeholder="5 stars, would drink again"
      />
      <Button type="submit" disabled={isSaving || disabled}>
        {isSaving ? "Saving..." : "Save this beer"}
      </Button>
    </form>
  );
}
