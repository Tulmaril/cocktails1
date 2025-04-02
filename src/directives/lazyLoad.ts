export default {
  mounted(el: HTMLImageElement, binding: { value: string }) {
    const loadImage = () => {
      el.src = binding.value;
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadImage();
    });

    observer.observe(el);
  },
};